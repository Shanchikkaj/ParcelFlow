import { HiArrowSmallUp, HiArrowLongDown } from "react-icons/hi2";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect,useState } from "react";
import { publicRequest } from "../requestMethods";

const Home = () => {

  const [parcels, setParcels] = useState([]);
  const [users, setUsers] = useState([]);

  const usersCount = users.length;
  const deliveredCount = parcels.filter(parcel => parcel.status ===3).length;
  const pendingCount = parcels.filter(parcel => parcel.status === 1).length;

  useEffect(()=>{
    const getParcels = async ()=>{
         try{
           const res = await publicRequest.get("/parcels");
           setParcels(res.data)

         } catch(error){
             console.log(error);
         }
    }
    getParcels()
  } ,[]);

useEffect(()=>{
    const getUsers = async ()=>{
         try{
           const res = await publicRequest.get("/Users");
           setUsers(res.data)

         } catch(error){
             console.log(error);
         }
    }
    getUsers()
  } ,[])

  return (
    <div>
      <div className="flex items-center " >
        <div className="flex flex-col text-[#D9D9D9] h-[250px] w-[350px] shadow-lg m-[20px] bg-[#697e94]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Users</h1>
            <div className="flex items-center my-[10px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">{usersCount}</span>
          </div>
        </div>
        <div className="flex flex-col text-[#D9D9D9] h-[250px] w-[350px] shadow-lg m-[20px] bg-[#697e94]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Delivered Parcels</h1>
            <div className="flex items-center my-[10px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">{deliveredCount}</span>
          </div>
        </div>
        <div className="flex flex-col text-[#D9D9D9] h-[250px] w-[350px] shadow-lg m-[20px] bg-[#697e94]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Pending Parcels</h1>
            <div className="flex items-center my-[10px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">{pendingCount}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly  ">
        <div className="h-[450px] w-[500px] text-[#fff]">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: deliveredCount, label: "Delivered Parcels" },
                  { id: 1, value: pendingCount, label: "Pending Parcels" },
                  { id: 2, value: usersCount, label: "Users" },
                ],

                innerRadius: 40,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -100,
                endAngle: 180,
                cx: 150,
                cy: 150,
              },
            ]}
          />
        </div>

        <div className="h-[350px] w-[300px] shadow-xl p-[20px] bg-[#7494b5]">
          <h2 className="flex px-[20px] text-[#fff]">Recent Users</h2>

          <ol className="flex font-semibold flex-col justify-end px-[20px] mt-[10px]  text-[#D9D9D9] ">
            <li>1. John Doe</li>
            <li>2. Alex Doe</li>
            <li>3. Jane Doe</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;