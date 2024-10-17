import React from "react";
import "./Sources.css";
import SOURCE from "./Indian-financial-system-1-320.webp";
import {Doughnut} from 'react-chartjs-2'
import src from "./sources1000.jpg"
import logo from "./Black And White Modern Marketing Agency Round Stamp Business Logo (2).png"
const Source = () => {
  return (
    <div className="Images">
       <div className="log10">
      <img src={logo} className="logo10" alt="logo"></img>
      <p className="name20"><strong>INDIAN STATE VISUALIZATION IN EACH SECTOR</strong></p>
      </div>
      <div className="SOURCE">
        <img src={SOURCE} alt="SOURCE" className="Sources"></img>
        <div className="Graph">
      <Doughnut 
                  data={{
                    labels:["Banking","Professional Advisory","Wealth Management","Mutual Funds","Insurance","Stock Market","Treasury/Debt Instruments","Tax/Audit Consulting","Capital Restructuring","Portfolio Management"],
                    datasets:[
                        {
                            label:"sector in percentage wise",
                            data:[17,14,13,13,11,9,7,6,6,4],
                            backgroundColor:[
                                "#153448",
                                "#41B06E",
                                "#141E46",
                                "#FF4191",
                                "#973131",
                                "#FF7F3E",
                                "#808836",
                                "#7E60BF",
                                "#73EC8B",
                                "#FCCD2A",
                            ],
                        }
                    ]
                   }}
                
            />
            
        </div>
        <h2 className="heading">10 Types of Financial Services:</h2>
        <div className="flex"><p className="Topic">
          1.Banking <br />
          2.Professional Advisory
          <br />
          3.Wealth Management
          <br />
          4.Mutual Funds
          <br />
          5.Insurance
          <br />
          6.Stock Market
          <br />
          7.Treasury/Debt Instruments
          <br />
          8.Tax/Audit Consulting
          <br />
          9.Capital Restructuring
          <br />
          10.Portfolio Management
          <br />
        </p>
        <img src={src} alt="picture" className="pic1" /></div>
        

        <div className="description">
          <h1>1. Banking</h1>
          <p className="paragraghh">
            The banking industry is the backbone of India’s financial services
            industry. The country has several public sector (27), private sector
            (21), foreign (49), regional rural (56) and urban/rural cooperative
            (95,000+) banks. The financial services offered in this segment
            include: Individual Banking (checking accounts, savings accounts,
            debit/credit cards, etc.) Business Banking (merchant services,
            checking accounts and savings accounts for businesses, treasury
            services, etc.) Loans (business loans, personal loans, home loans,
            automobile loans, working-capital loans, etc.) The banking sector is
            regulated by the Reserve Bank of India (RBI), which monitors and
            maintains the segment’s liquidity, capitalization, and financial
            health. <br />
            <br />
            <br />
            <br />{" "}
          </p>

          <h1>2. Professional Advisory </h1>
          <div>

          <p className="paragraghh">
            India has a strong presence of professional financial advisory
            service providers, which offer individuals and businesses a wide
            portfolio of services, including investment due diligence, M&A
            advisory, valuation, real-estate consulting, risk consulting,
            taxation consulting. These offerings are made by a range of
            providers, including individual domestic consultants to large
            multi-national organizations. <br />
            <br />
            <br />
            <br />{" "}
          </p>
          </div>

          <h1>3. Wealth Management </h1>
          <p className="paragraghh">
            Financial services offered within this segment include managing and
            investing customers’ wealth across various financial instruments-
            including debt, equity, mutual funds, insurance products,
            derivatives, structured products, commodities, and real estate,
            based on the clients’ financial goals, risk profile and time
            horizons. <br />
            <br />
            <br />
            <br />{" "}
          </p>

          <h1>4. Mutual Funds</h1>
          <p className="paragraghh">
            Mutual fund service providers offer professional investment services
            across funds that are composed of different asset classes, primarily
            debt and equity-linked assets. The buy-in for mutual fund solutions
            is generally lower compared to the stock market and debt products.
            These products are very popular in India as they generally have
            lower risks, tax benefits, stable returns and properties of
            diversification. The mutual funds segment has witnessed double-digit
            growth in assets under management over the last five years, owing to
            its popularity as a low-risk wealth multiplier.
            <br />
            <br />
            <br />
            <br />{" "}
          </p>

          <h1>5. Insurance</h1>
          <p className="paragraghh">
            Financial services offerings in this segment are primarily offered
            across two categories: General Insurance (automotive, home, medical,
            fire, travel, etc.) Life Insurance (term-life, money-back,
            unit-linked, pension plans, etc.) Insurance solutions enable
            individuals and organizations to safeguard against unforeseen
            circumstances and accidents. Payouts for these products vary across
            the nature of the product, time horizons, customer risk assessment,
            premiums, and several other key qualitative and quantitative
            aspects. In India, there is a strong presence of insurance providers
            across life insurance (24) and general insurance (39) categories.
            The insurance market is regulated by the Insurance Regulatory and
            Development Authority of India (IRDAI). <br />
            <br />
            <br />
            <br />{" "}
          </p>

          <h1>6. Stock Market</h1>
          <p className="paragraghh">
            The stock market segment includes investment solutions for customers
            in Indian stock markets (National Stock Exchange and Bombay Stock
            Exchange), across various equity-linked products. The returns for
            customers are based on capital appreciation – growth in the value of
            the equity solution and/or dividends – and payouts made by companies
            to its investors. <br />
            <br />
            <br />
            <br />{" "}
          </p>

          <h1>7. Treasury/Debt Instruments </h1>
          <p className="paragraghh">
            Services offered in this segment include investments into government
            and private organization bonds (debt). The issuer of the bonds
            (borrower) offers fixed payments (interest) and principal repayment
            to the investor at the end of the investment period. The types of
            instruments in this segment include listed bonds, non-convertible
            debentures, capital-gain bonds, GoI savings bonds, tax-free bonds,
            etc.
            <br />
            <br />
            <br />
            <br />{" "}
          </p>

          <h1>8. Tax/Audit Consulting</h1>
          <p className="paragraghh">
            This segment includes a large portfolio of financial services within
            the tax and auditing domain. This services domain can be segmented
            based on individual and business clients. They include: Tax –
            Individual (determining tax liability, filing tax-returns,
            tax-savings advisory, etc.) Tax – Business (determining tax
            liability, transfer pricing analysis and structuring, GST
            registrations, tax compliance advisory, etc.) In the auditing
            segment, service providers offer solutions including statutory
            audits, internal audits, service tax audits, tax audits,
            process/transaction audits, risk audits, stock audits, etc. These
            services are essential to ensure the smooth operation of business
            entities from a qualitative and quantitative perspective, as well as
            to mitigate risk. You can read more about taxation in India.
            <br />
            <br />
            <br />
            <br />{" "}
          </p>

          <h1>9. Capital Restructuring</h1>
          <p className="paragraghh">
            These services are offered primarily to organizations and involve
            the restructuring of capital structure (debt and equity) to bolster
            profitability or respond to crises such as bankruptcy, volatile
            markets, liquidity crunch or hostile takeovers. The types of
            financial solutions in this segment typically include structured
            transactions, lender negotiations, accelerated M&A and capital
            raising. <br />
            <br />
            <br />
            <br />{" "}
          </p>

          <h1>10. Portfolio Management</h1>
          <p className="paragraghh">
            This segment includes a highly specialized and customized range of
            solutions that enables clients to reach their financial goals
            through portfolio managers who analyze and optimize investments for
            clients across a wide range of assets (debt, equity, insurance, real
            estate, etc.). These services are broadly targeted at HNIs and are
            discretionary (investment only at the discretion of fund manager
            with no client intervention) and non-discretionary (decisions made
            with client intervention). <br />
            <br />
            <br />
            <br />{" "}
          </p>
        </div>
      </div>
      
    </div>
    
  );
};
export default Source;
