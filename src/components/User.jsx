import { calculateInvestmentResults } from "../util/investment"

export default function User({ onChangeInput, userInput }) {

    

    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" name="initialInvestment" onChange={onChangeInput} value={userInput.initialInvestment} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" name="annualInvestment" onChange={onChangeInput} value={userInput.annualInvestment} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expect Return</label>
                    <input type="number" name="expectedReturn" onChange={onChangeInput} value={userInput.expectedReturn} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" name="duration" onChange={onChangeInput} value={userInput.duration} />
                </p>
            </div>
        </div>
    )
}