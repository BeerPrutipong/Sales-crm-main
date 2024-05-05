import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faCartShopping, faCoins } from '@fortawesome/free-solid-svg-icons';
import './Card.css'
import DatePicker from "./DatePicker";

function Cards() {
    const [amount, setAmount] = useState([]);
    const [order, setOrder] = useState([]);
    const [delivery, setDelivery] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/totalAmount');
            setAmount(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/totalOrder');
            setOrder(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/delivery');
            setDelivery(response.data);
        };
        fetchData();
    }, []);

    const dataSize = amount.length;

    var totalDelivery = delivery.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.delivery
    }, 0);

    return (
        // row
        <>
            <DatePicker/>
            <div className="row mt-4">
                <div className="col-lg-auto col-md-6 mb-3">
                    <div className="card card-height rounded-0" style={{ width: "250px", height: "150px" }}>
                        <div className="card-body shadow-md p-3">
                            <div className="row">
                                <div className="col-5 col-md-4">
                                    <FontAwesomeIcon icon={faMoneyBill}
                                        style={{
                                            color: "#38d6a7",
                                            fontSize: "3em",
                                            display: "block",
                                        }} />
                                </div>
                                <div className="col-7 col-md-8">
                                    <div className="text-right">
                                        <div className="">
                                            <p className="text-dark font-weight-bold">ยอดขาย</p>
                                            <p className="text-right text-lg">{amount.map((item, key) => {
                                                if (key === dataSize - 1) {
                                                    return <p key={key}>{parseInt(item.NetAmount)} ฿</p>;
                                                }
                                            })}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-auto col-md-6 mb-3">
                    <div className="card card-height rounded-0" style={{ width: "250px", height: "150px" }}>
                        <div className="card-body shadow-md p-3">
                            <div className="row">
                                <div className="col-5 col-md-4">
                                    <FontAwesomeIcon icon={faCartShopping} style={{
                                        color: "#3ba6f7",
                                        fontSize: "3em",
                                        display: "block",
                                    }} />
                                </div>
                                <div className="col-7 col-md-8">
                                    <div className="text-right">
                                        <div className="">
                                            <p className="text-dark font-weight-bold">จำนวนออเดอร์</p>
                                            <p className="text-right text-lg">{order.map((item, key) => {
                                                return <p key={key}>{item.totalOrder}</p>
                                            })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-auto col-md-6 mb-3">
                    <div className="card card-height rounded-0" style={{ width: "250px", height: "150px" }}>
                        <div className="card-body shadow-md p-3">
                            <div className="row">
                                <div className="col-5 col-md-4">
                                    <FontAwesomeIcon icon={faCoins}
                                        style={{
                                            color: "#ffd43b",
                                            fontSize: "3em",
                                            display: "block",
                                        }} />
                                </div>
                                <div className="col-7 col-md-8">
                                    <div className="text-right">
                                        <div className="">
                                            <p className="text-dark font-weight-bold">ค่าส่ง</p>
                                            <p className="text-right text-lg">{totalDelivery}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-auto col-md-6 mb-3">
                    <div className="card card-height rounded-0" style={{ width: "250px", height: "150px" }}>
                        <div className="card-body shadow-md p-3">
                            <div className="row">
                                <div className="col-5 col-md-4">
                                    <FontAwesomeIcon icon={faCoins}
                                        style={{
                                            color: "#ffd43b",
                                            fontSize: "3em",
                                            display: "block",
                                        }} />
                                </div>
                                <div className="col-7 col-md-8">
                                    <div className="text-right">
                                        <div className="">
                                            <p className="text-dark font-weight-bold">ยอดหลังหักค่าส่ง</p>
                                            <p className="text-right text-lg">{order.map((item, key) => {
                                                return <p key={key}>{item.totalOrder}</p>
                                            })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
