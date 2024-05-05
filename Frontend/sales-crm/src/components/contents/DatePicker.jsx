import React from 'react'

function DatePicker() {
  return (
    <div className="container bg-white p-3 mt-3 shadow-lg" style={{color : 'gray'}}>
                <form action="" className="d-flex justify-content-start align-items-center">
                    <div className="column me-3">
                        <span>Daily Month</span>
                        <select className="form-select rounded-0 text-secondary" arial-label="Default select example" name="" id="">
                            <option selected>Select Month</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className="column me-3">
                        <span>Daily Month</span>
                        <select className="form-select rounded-0 text-secondary" arial-label="Default select example" name="" id="">
                            <option selected>Select Month</option>
                            <option value="4">1</option>
                            <option value="5">2</option>
                            <option value="6">3</option>
                        </select>
                    </div>

                    <div className="column me-3">
                        <span>Daily Month</span>
                        <select className="form-select rounded-0 text-secondary" arial-label="Default select example" name="" id="">
                            <option selected>Select Month</option>
                            <option value="7">1</option>
                            <option value="8">2</option>
                            <option value="9">3</option>
                        </select>
                    </div>

                    <div className="column me-3">
                        <span>Daily Month</span>
                        <select className="form-select rounded-0 text-secondary" arial-label="Default select example" name="" id="">
                            <option selected>Select Month</option>
                            <option value="10">1</option>
                            <option value="11">2</option>
                            <option value="12">3</option>
                        </select>
                    </div>
                </form>
            </div>
  )
}

export default DatePicker