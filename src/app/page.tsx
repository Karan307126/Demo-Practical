import Search from "@/app/components/SearchBar";
import Dropdown from "@/app/components/Dropdown";
import Card from "@/app/components/Card";
import Pagination from "./components/Pagination";

type User = {
  gender: "male" | "female";
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  dob: {
    date: string;
    age: number;
  };
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

const fetchUserData = async () => {
  const response = await fetch(
    "https://randomuser.me/api?inc=id,name,gender,dob,location,picture&results=100&nat=gb"
  );
  const data = await response.json();
  return data.results;
};

export default async function Home() {
  const users: User[] = await fetchUserData();
  return (
    <>
      <nav className="flex justify-between items-center gap-4 flex-wrap mt-2">
        <Search placeholder="Search for people" />
        <Dropdown />
      </nav>
      <main className="flex flex-col justify-center items-center gap-2 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {users.slice(0, 10).map((user) => (
            <Card
              key={user.id.value}
              dob={new Date(user.dob.date)}
              image_url={user.picture.medium}
              location={`${user.location.city}, ${user.location.state}`}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
            />
          ))}
        </div>
        <Pagination totalPages={10} />
      </main>
    </>
  );
}
