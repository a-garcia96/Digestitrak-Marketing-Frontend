import React from "react";
import DataEntryHeader from "../../components/DataEntryHeader/DataEntryHeader";
import { app } from "../../firebase/firebase";
import {
  collection,
  where,
  orderBy,
  query,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import nookies from "nookies";
import DataTable from "../../components/DataTable/DataTable";

export async function getServerSideProps(ctx) {
  const db = getFirestore(app);

  const cookies = nookies.get(ctx);

  // make refernce to collection
  const symptomsRef = collection(db, "symptom-tracker");
  //create query using reference and order by start time in descending order
  const q = query(
    symptomsRef,
    where("uid", "==", cookies.uid),
    orderBy("startTime", "desc")
  );
  //get collection based on query
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      // For those of you still dealing with this you can continue with the JSON.parse(JSON.stringify) hack or you can make sure your data consists of easily-serializable primitives.
      data: JSON.parse(JSON.stringify(doc.data())),
    };
  });

  return {
    props: { data: data },
  };
}

const index = ({ data }) => {
  return (
    <>
      <DataEntryHeader page={"symptom-tracker"} />
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <DataTable mealData={data} dataType={"symptoms"}/>
      </section>
    </>
  );
};

export default index;
