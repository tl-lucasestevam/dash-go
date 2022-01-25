import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { NextPage } from "next";
import { Header, Sidebar } from "../components";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-01-18T00:00:00.000Z",
      "2021-01-19T00:00:00.000Z",
      "2021-01-20T00:00:00.000Z",
      "2021-01-21T00:00:00.000Z",
      "2021-01-22T00:00:00.000Z",
      "2021-01-23T00:00:00.000Z",
      "2021-01-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.9,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 85, 96, 485, 1] }];

const Dashboard: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />
        <SimpleGrid flex={1} gap={4} minChildWidth="320px" align="flex-start">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb={4}>
            <Text>Subscribes of the week</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb={4}>
            <Text>Open Tax</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
