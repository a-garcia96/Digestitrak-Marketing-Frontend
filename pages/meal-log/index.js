import React from "react";
import { app } from "../../firebase/firebase";
import { collection, where, orderBy, query, getDocs, getFirestore } from "firebase/firestore";
import nookies from "nookies";

import DataEntryHeader from "../../components/DataEntryHeader/DataEntryHeader";
import DataTable from "../../components/DataTable/DataTable";

export async function getServerSideProps(ctx) {

  const db = getFirestore(app);

  // const cookies = parseCookies()

  // console.log(cookies)

  const cookies = nookies.get(ctx)

  console.log(JSON.stringify(cookies.uid))

  // make refernce to collection
  const mealsRef = collection(db, "PHDiary")
  //create query using reference and order by start time in descending order
  const q = query(mealsRef, where("uid", "==", cookies.uid), orderBy("startTime", "desc"))
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
      <header>
        <DataEntryHeader />
      </header>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <DataTable mealData={data} />
      </section>
    </>
  );
};

export default index;
