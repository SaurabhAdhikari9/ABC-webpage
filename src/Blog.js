import React from 'react';
import { Divider } from 'antd';
import { BackTop } from 'antd';

import 'antd/dist/antd.css';
import './Css/Nav.css';
import './Css/Blog.css';
import { Link } from "react-router-dom";

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
function Header() {
  return (
    <div className='navBar'>
      <nav>
        <div className="menu">
          <div className="menuoption">
            <ul>
              <li ><Link to="/">Home</Link></li>
              <li className="active" ><Link to="./Blog">Blog</Link></li>
              <li ><Link to="./Research">Research</Link></li>
              <li ><Link to="./Contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="navtitle">
          ABC<span className="subtitle">Tech</span>.
        </div>
      </nav>
    </div>
  )
}

export default function Blog() {
  return (
    <>
      <Header />

      <div className='content' style={{ height: '300vh', padding: 8, marginTop: '50px' }}>

        <div className="subHead" id='Cbs'>
          <hr />
          ABC CBS
          <hr />
        </div>
        <br />
        <div className="CBS">
          <b>
            ABC®CBS
          </b> is solution for the financial and Banking
          Institutions compiling the banking requirement
          like Customer/Members profile management, Deposit
          & Savings management , Loans & Credit management,
          Shares and Dividend management, Teller & Cash Repository Managements,
          Core Accounts & Reports, Division and NRB Reports,
          Ratio Analysis Reports, Multiple Branch Banking,
          SMS/Text Banking, Internet Banking, Mobile Banking etc.
          <br />
        </div>
        <br />
        <br />
        <div className="subHead" id='mobile'>
          <hr />
          Mobile Banking
          <hr />
        </div>
        <br />
        <div className='mobileBanking'>
          <b>
            mBank – Next Generation Mobile Banking
            <br />
            (Banking & Payments right from your Mobile)
            <Divider />
            <br />

          </b>


          We have tied up with Hamro Technology “mBank” for mobile
          Banking platform.
          <br />
          mBank is a cloud based mobile banking setup designed to enable
          mobility for co-operatives, microfinance, financial institutions
          and banks. The service integrates with the core banking
          software of each of these banks using a patented reverse
          tunnelling process. The mobile banking and payments
          services offered through this setup include balance enquiry,
          P2P payments, interbank and intra bank transfers, mini statement,
          loan repayments, wallet service and bill payments.

        </div>

        <br />
        <div className="subHead" id='atm'>
          <hr />
          ATM Banking
          <hr />
        </div>
        <br />

        <div className="atmBanking">
          <b>
            An automated teller machine (ATM)
          </b> is an  electronic banking outlet that

          allows customers to complete basic transactions without the aid of a branch representative or teller. Anyone with a credit card or debit card can access cash at most ATMs.

          ATMs are convenient, allowing consumers to perform quick self-service transactions such as deposits, cash withdrawals, bill payments, and transfers between accounts. Fees are commonly charged for cash withdrawals by the bank where the account is located, by the operator of the ATM, or by both. Some or all of these fees can be avoided by using an ATM operated directly by the bank that holds the account.

        </div>
        <br />
        <div className="subHead" id='sms'>
          <hr />
          SMS Banking
          <hr />
        </div>
        <br />
        <BackTop duration='500' visibilityHeight="400">
          <div style={style}>Up</div>
        </BackTop>
        <div className="smsBanking">
          <strong>SMS Banking</strong> is Text Based Banking Facility provided by ADBL to its Account Holders. Short message is typed in specified syntax structure in message box and it is sent to 32425 for Banking Transaction and Enquiry.

          Every Mobile Banking Registered Account Holder can use this Service and there is no any Extra charge. Smart Phone User can also use SMS Banking Facility through the ADBL Smart Mobile Banking App and those who do not have smart phone can send message in specified syntax.

          Message format for SMS Banking are shown below. Current/Savings & Overdraft account holders are eligible for this service. This facility gives real-time access to the accounts, anytime, anywhere to the customers.
        </div>
      </div>
    </>
  )
}
