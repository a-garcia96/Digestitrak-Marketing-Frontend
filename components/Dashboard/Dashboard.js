import {
  Card,
  Title,
  Text,
  Metric,
  Grid,
  Col,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  ProgressBar,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableFoot,
  TableFooterCell,
  Badge,
} from "@tremor/react";

export default function Example() {
  const data = [
    {
      name: "Viola Amherd",
      Role: "Federal Councillor",
      departement:
        "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
      status: "active",
    },
    {
      name: "Simonetta Sommaruga",
      Role: "Federal Councillor",
      departement:
        "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
      status: "active",
    },
    {
      name: "Alain Berset",
      Role: "Federal Councillor",
      departement: "The Federal Department of Home Affairs (FDHA)",
      status: "active",
    },
    {
      name: "Ignazio Cassis",
      Role: "Federal Councillor",
      departement: "The Federal Department of Foreign Affairs (FDFA)",
      status: "active",
    },
    {
      name: "Ueli Maurer",
      Role: "Federal Councillor",
      departement: "The Federal Department of Finance (FDF)",
      status: "active",
    },
    {
      name: "Guy Parmelin",
      Role: "Federal Councillor",
      departement:
        "The Federal Department of Economic Affairs, Education and Research (EAER)",
      status: "active",
    },
    {
      name: "Karin Keller-Sutter",
      Role: "Federal Councillor",
      departement: "The Federal Department of Justice and Police (FDJP)",
      status: "active",
    },
  ];

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
                  <Title>List of Swiss Federal Councillours</Title>
                  <Table className="mt-5">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Position</TableHeaderCell>
                        <TableHeaderCell>Department</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((item) => (
                        <TableRow key={item.name}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>
                            <Text>{item.Role}</Text>
                          </TableCell>
                          <TableCell>
                            <Text>{item.departement}</Text>
                          </TableCell>
                          <TableCell>
                            <Badge color="emerald">{item.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabPanel>
                <TabPanel>
                  <Title>List of Swiss Federal Councillours</Title>
                  <Table className="mt-5">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Position</TableHeaderCell>
                        <TableHeaderCell>Department</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((item) => (
                        <TableRow key={item.name}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>
                            <Text>{item.Role}</Text>
                          </TableCell>
                          <TableCell>
                            <Text>{item.departement}</Text>
                          </TableCell>
                          <TableCell>
                            <Badge color="emerald">{item.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
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
              <Metric>21</Metric>
            </Card>
            <Card decoration="top" decorationColor="teal">
              <Text>Symptoms this week</Text>
              <Metric>4</Metric>
            </Card>
          </div>
        </Col>
      </Grid>
    </div>
  );
}
