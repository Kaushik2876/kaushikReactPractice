import Header from "Container/HeaderFile/HeaderFile";

const Layout = ({ children} : { children : React.ReactNode}) => {
    return (
    <>
        <Header />
        <div className="GlobalLayoutWrapper">
            <main>{children}</main>
        </div>
    </>
    );
};
export default Layout;