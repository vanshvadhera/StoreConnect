import React from 'react'
import classes from './ALAboutus.module.css'
import WhyWithUsCard from './WhyWithUsCard'

const ALAboutus = () => {
    return (
        <div>
            <div className={classes.AUBackground}>
                <div className={classes.AUWrapper}>
                    <div className={classes.AUInner}>
                        <div style={{ border: "2px black solid", borderRadius: "5px" }} >
                            <img src="https://10web-site.ai/7/wp-content/uploads/sites/8/2023/09/recycled-shoe-store-home-about-image_z3nAOhp7.webp" alt="DeliveryBoyImage" style={{ width: "100%" }} />
                        </div>
                        <div className={classes.AUAU}>
                            <p style={{ color: "#2270e2", fontWeight: 700 }}>ABOUT US</p>
                            <p className={classes.AUSubheading}>Empowering Shopkeepers and Customers</p>
                            <p style={{ textAlign: "left" }}>
                                At ShopConnect, we believe in creating a seamless connection between shopkeepers and customers. Our platform empowers shopkeepers with real-time insights and tools to streamline their operations, while offering customers a safe and convenient shopping experience. Join us in our mission to support local businesses and communities.
                            </p>

                        </div>
                    </div>
                </div>
                <div className={classes.whyshop}>
                    <center><h1 className={classes.AUSubheading}>Why Shop with ShopConnect?</h1></center>
                    <center><p style={{ fontSize: "17px", marginTop: "50px" }}>ShopConnect is more than just a shopping platform. It’s a community-driven marketplace that supports local businesses and offers a hassle-free experience for customers. From customized delivery rates to direct communication with store owners, ShopConnect offers a range of benefits for both shopkeepers and customers, ensuring seamless transactions and satisfaction.</p></center>
                    <div className={classes.whywithus}>
                        <div className={classes.whywithusinner}>
                            <WhyWithUsCard number="01" heading="Tailored Delivery Rates
                                " subheading="Shopkeepers can customize delivery rates based on the location, size, and weight of orders, ensuring efficient and cost-effective deliveries.
                                "/>
                            <WhyWithUsCard number="02" heading="Safe & Secure Payments
                                " subheading="Customers can enjoy secure payment options, protecting their personal and financial data, and ensuring a safe and convenient shopping experience.
                                " />
                            <WhyWithUsCard number="03" heading="Real-Time Insights
                                " subheading="Shopkeepers can track sales, manage inventory, and optimize operations with real-time insights, enhancing their productivity and profitability.
                                " />
                            <WhyWithUsCard number="04" heading="Direct Communication
                                " subheading="Customers can communicate directly with store owners, ensuring quick and personalized responses to queries and concerns.
                                " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ALAboutus
