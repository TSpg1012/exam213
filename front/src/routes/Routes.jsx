import {Helmet} from "react-helmet"
import App from "../App"
import Add from "../components/Add/Add"
import Basket from "../components/Basket/Basket"
import Detail from "../components/Detail/Detail"

export const routes = [
    {
        path:"/",
        element:<>
          <Helmet>
              <title>
                  Home
              </title>
          </Helmet>
          <App />
        </>
    } , 
    {
        path:"/Add",
        element:<>
        <Helmet>
            <title>
                Admin
            </title>
        </Helmet>
        <Add />
        </>
    } , 
    {
        path:"/Basket",
        element:<>
        <Helmet>
            <title>
                Basket
            </title>
        </Helmet>
        <Basket/>
        </>
    } , 
    {
        path:"/:id",
        element:<>
        <Helmet>
            <title>
                Product
            </title>
        </Helmet>
        <Detail/>
        </>
    } , 
]