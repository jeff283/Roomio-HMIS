import ButtonCustom from "../ButtonCustom/ButtonCustom";
import "./PaymentPopUp.css";
import MpesaLogo from "../../assets/images/MpesaLogo.png";

interface Props {
  onClickPay: () => void;
}

const PaymentPopUp = ({ onClickPay }: Props) => {
  return (
    <div>
      <div className="paymentContainer">
        <div className="payBorderContainer ">
          <div className="payTitle fz32 poppins-bold tac">Payment</div>
          <div className="payPrice fz48 poppins-semibold tac ">Ksh 12,000</div>
          <div className="payProviderImg">
            <img src={MpesaLogo} alt="Lipa Na Mpesa" />
          </div>

          <div className="paymentInfo">
            <div className="payBusinessNo fz20">
              <span className="poppins-semibold">Business Number:</span>
              <span>222220</span>
            </div>
            <div className="payAccNo fz20">
              <span className="poppins-semibold">Account Number:</span>
              <span>Adm NO.</span>
            </div>
          </div>

          <div className="paymentForm">
            <form>
              <label htmlFor="refNO">Payment Reference:</label>
              <input
                type="text"
                id="refNO"
                placeholder="Payment Reference Number"
                required
              />
            </form>
          </div>
          <div className="payCta tac ">
            <ButtonCustom dark={true} onBtnClick={onClickPay}>
              PAY
            </ButtonCustom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopUp;
