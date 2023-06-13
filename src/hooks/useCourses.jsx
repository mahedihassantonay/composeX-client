import { useQuery } from "@tanstack/react-query";

const useCourses = () => {
    const {refetch, data: courses=[]} = useQuery({
        queryKey: ['courses'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/classes`)
            return res.json()
        },
      })
      return [courses , refetch]
    
    };

export default useCourses;