import React, { useState } from "react";
import {
  collection,
  addDoc,
  Timestamp,
  getFirestore,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase/firebase";
import nookies from "nookies";

const UpdateEntryForm = ({ data }) => {
  const router = useRouter();
  const cookies = nookies.get();
  const [formData, setFormData] = useState({ uid: cookies.uid });

  //data needed
  // Start Time
  // End Time
  // Meal Boolean
  // Comments

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const docRef = await addDoc(collection(db, "PHDiary"), { ...formData });

    console.log(docRef);
    console.log("Document written with ID: ", docRef.id);

    router.push("/meal-log");
  };

  const handleChange = (e) => {
    const inputType = e.target.id;
    const inputValue = e.target.value;

    switch (inputType) {
      case "startTime":
        setFormData({
          ...formData,
          startTime: Timestamp.fromDate(new Date(inputValue)),
        });
        break;
      case "endTime":
        setFormData({
          ...formData,
          endTime: Timestamp.fromDate(new Date(inputValue)),
        });
        break;
      case "comments":
        setFormData({ ...formData, comments: inputValue });
        break;
      case "fullMeal":
        setFormData({
          ...formData,
          fullMeal: inputValue == "Yes" ? true : false,
        });
        break;
    }

    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-[25%] mx-auto">
        <label
          htmlFor="startTime"
          className="block text-xs font-medium text-teal-500"
        >
          Start Time
        </label>

        <input
          type="datetime-local"
          id="startTime"
          value={data.formattedStartTime}
          className="mt-1 w-full rounded-md border-teal-500 shadow-sm sm:text-sm py-2 mb-4"
          onChange={handleChange}
        />

        <label
          htmlFor="endTime"
          className="block text-xs font-medium text-teal-500"
        >
          End Time
        </label>

        <input
          type="datetime-local"
          id="endTime"
          value={data.formattedEndTime}
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2 mb-4"
          onChange={handleChange}
        />

        <label
          htmlFor="comments"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500 mb-4"
        >
          <input
            type="textarea"
            id="comments"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 py-2 px-1"
            placeholder="comments"
            onChange={handleChange}
            value={data.comments}
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-teal-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Comments
          </span>
        </label>

        <label
          htmlFor="fullMeal"
          className="block text-sm font-medium text-teal-500"
        >
          Was this a full meal?
        </label>

        <select
          name="fullMeal"
          id="fullMeal"
          className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm py-2 px-1 mb-4"
          onChange={handleChange}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button
          type="submit"
          className="block rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-600 focus:outline-none focus:ring mx-auto"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default UpdateEntryForm;
