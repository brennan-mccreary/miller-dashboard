import SideDrawer from "./SideDrawer";

const Layout = ({ children }) => {
    return (
        <div>
            <SideDrawer/>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;