import useSwr from "swr";
async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export const countpemesan = () => {
  const url = "http://localhost:3000/api/count/countpemesan";
  const { data, error } = useSwr(url, fetcher);
  if (error) {
    return <div>Error loading</div>;
  }
  if (!data) {
    return <div> loading</div>;
  }
  return { data, error };
};
