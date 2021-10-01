import Link from "next/link";
import Style from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Drawer from "@material-ui/core/Drawer";
import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className={Style.bigcontainer}>
      <div className={Style.container}>
        <img src={"/images/Logo.png"} className={Style.Logo} />

        <div className={Style.Navbar}>
          <Link href="/Products">
            <p className={Style.p}>Products</p>
          </Link>
          <p className={Style.p}>Info</p>
          <p className={Style.p}>Benifits</p>
          <p className={Style.p}>Contact</p>
          <p className={Style.p}>Store</p>
        </div>

        <div className={Style.searchbox}>
          <button className={Style.btnsearch}>
            <img src="/images/searchicon.png" className={Style.searchicon} />
          </button>
          <input
            type="text"
            className={Style.inputsearch}
            placeholder="Type to Search..."
          />
        </div>
      </div>

      <div className={Style.Drawer}>
        <img
          src={"/images/Logo.png"}
          className={Style.Logo}
          width={60}
          height={60}
        />

        <div className={Style.reactfra}>
          <div className={Style.butt} onClick={() => setOpen(true)}>
            <RiMenuLine className={Style.navicon} />
          </div>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            style={{ backgroundColor: "transparent" }}
          >
            <div className={Style.Navbar}>
              <p className={Style.p}>Products</p>
              <p className={Style.p}>Products</p>
              <p className={Style.p}>Info</p>
              <p className={Style.p}>Benifits</p>
              <p className={Style.p}>Store</p>
            </div>
            <div className={Style.searchbox}>
              <button className={Style.btnsearch}>
                <img
                  src="/images/searchicon.png"
                  className={Style.searchicon}
                />
              </button>
              <input
                type="text"
                className={Style.inputsearch}
                placeholder="Type to Search..."
              />
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
