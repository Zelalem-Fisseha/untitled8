import {Cards} from "../components/cards.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
function Dashboard() {
    return (
        <div
        style={{
            display: "flex",
            width: "100%",

        }}>


            <Sidebar/>
            <div
                style={{width:"100%",
                    display:"flex",
                    flexDirection:"column",
            }}>

                <Header/>
                <Cards cardContents={[{
                    title: "home",
                    description: "Home",
                    count: 4
                }]


                }/>


            </div>







            </div>







    )
}
export default Dashboard;