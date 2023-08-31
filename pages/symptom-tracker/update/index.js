import React from "react";
import { app } from "../../../firebase/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import UpdateEntryForm from "../../../components/UpdateEntryForm/UpdateEntryForm";

export async function getServerSideProps(context) {
  const db = getFirestore(app);
  const param = context.query.entry;

  // make refernce to document
  const docRef = doc(db, "symptom-tracker", param);

  //get document
  const docSnapshot = await getDoc(docRef);

  return {
    props: {
      data: JSON.parse(JSON.stringify(docSnapshot.data())),
      entryID: param,
    },
  };
}

const index = ({ data, entryID }) => {
  return (
    <>
      <UpdateEntryForm data={{ ...data }} entryID={entryID} />
    </>
  );
};

export default index;
