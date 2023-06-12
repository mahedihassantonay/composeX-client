import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedClass = () => {
  const { user } = useAuth();
  const {refetch, data: courses=[]} = useQuery({
    queryKey: ['selectedClass', user?.email],
    queryFn: async ()=>{
        const res = await fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`)
        return res.json()
    },
  })
  return [courses , refetch]

};

export default useSelectedClass;
