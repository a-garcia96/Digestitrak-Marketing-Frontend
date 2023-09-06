import {
  Card,
  Text,
  Metric,
  Grid,
  Col,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Badge,
} from "@tremor/react";
import ClipLoader from "react-spinners/ClipLoader";
import { app } from "../../firebase/firebase";
import {
  collection,
  where,
  orderBy,
  query,
  getDocs,
  getFirestore,
  Timestamp
} from "firebase/firestore";
import nookies from "nookies";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
  const firestoreTimeStamp = Timestamp.fromDate(currentDate)

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore(app);
      const cookies = nookies.get();

      // make reference to collections
      const symptomRef = collection(db, "symptom-tracker");
      const mealRef = collection(db, "PHDiary");
      //create query using reference and order by start time in descending order
      const q1 = query(
        mealRef,
        where("uid", "==", cookies.uid),
        where("startTime", ">", firestoreTimeStamp),
        orderBy("startTime", "desc")
      );
      const q2 = query(
        symptomRef,
        where("uid", "==", cookies.uid),
        where("startTime", ">", firestoreTimeStamp),
        orderBy("startTime", "desc")
      );
      //get collection based on query
      const querySnapshot1 = await getDocs(q1);
      const querySnapshot2 = await getDocs(q2);

      const mealData = querySnapshot1.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const symptomData = querySnapshot2.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setData({
        mealData: [...mealData],
        symptomData: [...symptomData],
      });
    }

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2">
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <Grid numItemsLg={6} className="gap-6 mt-6">
        {/* Main section */}
        <Col className="" numColSpanLg={4}>
          <Card className="h-full">
            <Text>Summary for the week</Text>
            <TabGroup>
              <TabList className="mt-8">
                <Tab>Meals</Tab>
                <Tab>Symptoms</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Table className="mt-5">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Start Time</TableHeaderCell>
                        <TableHeaderCell>End Time</TableHeaderCell>
                        <TableHeaderCell>Full Meal</TableHeaderCell>
                        <TableHeaderCell>Comments</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.mealData.map((item) => {
                        let startDate = new Date(
                          item.startTime.seconds * 1000
                        ).toDateString();
                        let endDate = new Date(
                          item.endTime.seconds * 1000
                        ).toDateString();
                        let startTime = new Date(
                          item.startTime.seconds * 1000
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        });
                        let endTime = new Date(
                          item.endTime.seconds * 1000
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        });

                        return (
                          <TableRow key={item.id}>
                            <TableCell>{startDate + " " + startTime}</TableCell>
                            <TableCell>
                              <Text>{endDate + " " + endTime}</Text>
                            </TableCell>
                            <TableCell>
                              <Text>
                                {item.fullMeal == true ? "yes" : "no"}
                              </Text>
                            </TableCell>
                            <TableCell>
                              <Badge color="emerald">{item.comments}</Badge>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TabPanel>
                <TabPanel>
                  <Table className="mt-5">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Start Time</TableHeaderCell>
                        <TableHeaderCell>End Time</TableHeaderCell>
                        <TableHeaderCell>Symptoms</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.symptomData.map((item) => {
                        let startDate = new Date(
                          item.startTime.seconds * 1000
                        ).toDateString();
                        let endDate = new Date(
                          item.endTime.seconds * 1000
                        ).toDateString();
                        let startTime = new Date(
                          item.startTime.seconds * 1000
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        });
                        let endTime = new Date(
                          item.endTime.seconds * 1000
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        });

                        return (
                          <TableRow key={item.id}>
                            <TableCell>{startDate + " " + startTime}</TableCell>
                            <TableCell>
                              <Text>{endDate + " " + endTime}</Text>
                            </TableCell>
                            <TableCell>
                              <Badge color="emerald">{item.comments}</Badge>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </Card>
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6">
            <Card decoration="top" decorationColor="teal">
              <Text>Meals this week</Text>
              <Metric>{data.mealData.length}</Metric>
            </Card>
            <Card decoration="top" decorationColor="teal">
              <Text>Symptoms this week</Text>
              <Metric>{data.symptomData.length}</Metric>
            </Card>
          </div>
        </Col>
      </Grid>
    </div>
  );
}
