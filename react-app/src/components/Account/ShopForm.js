import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const ShopForm = () => {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [shop_logo, setShopLogo] = useState("");
    const [name, setName] = useState("");
    const description = [description, setDescription]
}