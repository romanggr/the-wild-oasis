import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";


const CabinTable = () => {
  const [searchParams] = useSearchParams()
  const { isLoading, cabins = [], error } = useCabins()

  if (!cabins.length) return <Empty resourceName={"cabins"} />

  // FILTER
  const filterValue = searchParams.get("discount") || "all"
  let filteredCabins = [];
  if (filterValue === "all") filteredCabins = cabins
  if (filterValue === "no-discount") filteredCabins = cabins.filter(cabin => cabin.discount === 0)
  if (filterValue === "with-discount") filteredCabins = cabins.filter(cabin => cabin.discount > 0)

  //  SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc"
  const [field, direction] = sortBy.split("-")
  const modifier = direction === "asc" ? 1 : -1
  const sortedCabins = filteredCabins ? filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier) : []


  if (isLoading) return <Spinner />
  return (
    <Menus>
      <Table columns="1fr 1fr 3fr 1fr 1fr 0.5fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body data={sortedCabins} render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />} />
      </Table>
    </Menus>
  )
}

export default CabinTable
