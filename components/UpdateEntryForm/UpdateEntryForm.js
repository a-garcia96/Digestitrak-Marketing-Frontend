import React, { useState } from "react";
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase/firebase";
import nookies from "nookies";

const UpdateEntryForm = ({ data, entryID }) => {
  const router = useRouter();
  const cookies = nookies.get();
  const [formData, setFormData] = useState({ ...data, uid: cookies.uid });
  let startTime = new Date(data.startTime.seconds * 1000);
  let endTime = new Date(data.endTime.seconds * 1000);
  const [formattedStartTime, setFormattedStartTime] = useState(
    new Date(startTime.setHours(startTime.getHours() - 7))
      .toISOString()
      .slice(0, -1)
  );
  const [formattedEndTime, setFormattedEndTime] = useState(
    new Date(endTime.setHours(endTime.getHours() - 7))
      .toISOString()
      .slice(0, -1)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const entryRef = doc(db, "PHDiary", entryID);
    await updateDoc(entryRef, { ...formData });

    // console.log(formData)
    router.push("/meal-log");
  };

  const handleChange = (e) => {
    const inputType = e.target.id;
    const inputValue = e.target.value;

    switch (inputType) {
      case "startTime":
        setFormattedStartTime(inputValue);
        setFormData({
          ...formData,
          startTime: Timestamp.fromDate(new Date(inputValue)),
        });
        console.log(startTime);
        break;
      case "endTime":
        setFormattedEndTime(inputValue);
        setFormData({
          ...formData,
          endTime: Timestamp.fromDate(new Date(inputValue)),
        });
        console.log(endTime);
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
  };

  return (
    <>
      <form
        id="updateMealForm"
        onSubmit={handleSubmit}
        className="w-[25%] mx-auto"
      >
        <label
          htmlFor="startTime"
          className="block text-xs font-medium text-teal-500"
        >
          Start Time
        </label>

        <input
          type="datetime-local"
          id="startTime"
          value={formattedStartTime}
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
          value={formattedEndTime}
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
            value={formData.comments}
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
          defaultValue={data.fullMeal == true ? "Yes" : "No"}
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
