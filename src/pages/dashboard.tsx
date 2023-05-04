import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[400],
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
      show: true,
      color: theme.colors.gray[500],
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: theme.colors.gray[500],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-04-02T00:00:00.000Z",
      "2021-04-11T00:00:00.000Z",
      "2021-05-01T00:00:00.000Z",
      "2021-05-14T00:00:00.000Z",
      "2021-06-27T00:00:00.000Z",
      "2021-07-11T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: "series1",
    data: [31, 120, 10, 30, 43, 11, 200],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.700" borderRadius={8} pb="4">
            <Text>Subscribers of the week</Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p="8" bg="gray.700" borderRadius={8} pb="4">
            <Text>Open rate</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
