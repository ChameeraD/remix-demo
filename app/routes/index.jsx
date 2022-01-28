
export let meta = () => {
  return {
    title: "My Posts"
  };
};

export default function Index() {
  return (
    <div>
      <form action="/post" method="GET">
        Post Id: <input type="number" name="postId" />
        <input type="submit" value="Get Posts" />
      </form>
    </div>
  );
}