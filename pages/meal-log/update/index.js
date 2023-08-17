import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { app } from "../../../firebase/firebase";
import {
  collection,
  where,
  orderBy,
  query,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import nookies from "nookies";

export async function getServerSideProps(context) {
  const db = getFirestore(app);
  const param = context.query.entry;

  // make refernce to document
  const docRef = doc(db, "PHDiary", param);

  //get document
  const docSnapshot = await getDoc(docRef);

  return {
    props: { data: JSON.parse(JSON.stringify(docSnapshot.data())) },
  };
}

const index = ({ data }) => {
    useEffect(() => {
        console.log(data)
    }, [])

  return <div>Check the console</div>;
};

export default index;
