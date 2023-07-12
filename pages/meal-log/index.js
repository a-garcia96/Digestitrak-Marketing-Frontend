import React from "react";
import { app } from "../../firebase/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import DataEntryHeader from "../../components/DataEntryHeader/DataEntryHeader";
import DataTable from "../../components/DataTable/DataTable";

export async function getServerSideProps() {
  const db = getFirestore(app);

  const querySnapshot = await getDocs(collection(db, "PHDiary"));
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
