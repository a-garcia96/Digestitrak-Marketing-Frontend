import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { app } from "../../../firebase/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import UpdateEntryForm from "../../../components/UpdateEntryForm/UpdateEntryForm";

export async function getServerSideProps(context) {
  const db = getFirestore(app);
  const param = context.query.entry;

  // make refernce to document
  const docRef = doc(db, "PHDiary", param);

  //get document
  const docSnapshot = await getDoc(docRef);

  return {
    props: { data: JSON.parse(JSON.stringify(docSnapshot.data())), entryID: param },
  };
}

const index = ({ data, entryID }) => {
  const startTime = new Date(data.startTime.seconds * 1000);
  const endTime = new Date(data.endTime.seconds * 1000)
  const formattedStartTime = new Date(startTime.setHours(startTime.getHours() - 7)).toISOString().slice(0, -1)
  const formattedEndTime = new Date(endTime.setHours(endTime.getHours() - 7)).toISOString().slice(0, -1)

  return (
    <>
      <UpdateEntryForm
        data={{ ...data}} formattedStartTime={formattedStartTime} formattedEndTime={formattedEndTime} entryID={entryID}
      />
    </>
  );
};

export default index;