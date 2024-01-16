/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import './App.css'
import iconArcade from './assets/icon-arcade.svg'
import iconAdvanced from './assets/icon-advanced.svg'
import iconPro from './assets/icon-pro.svg'
import thanksLogo from './assets/icon-thank-you.svg'
// ================ Head Component =================

function Head(props) {
  return (
    <div className="head">
      <h1>{props.heading}</h1>
      <p>{props.subHeading}</p>
    </div>
  )
}

// ================ Button Component =================

function Button(props) {
  return (

    // <button style={props.style} className={props.className} onClick={props.onClick}>{props.text}</button>
    <input type="button" style={props.style} className={props.className} onClick={props.onClick} value={props.text} />
  )
}

// ================ Progress Component =================

function Progress(props) {
  return (
    <div className="progress">
      <div ref={props.pro} className="count">
        {props.number}
      </div>
      <div className="details">
        <h2>STEP {props.number}</h2>
        <h3>{props.detail}</h3>
      </div>
    </div>
  )
}

// ================ SideBar Component =================

function SideBar(props) {
  const pro0 = useRef()
  const pro1 = useRef()
  const pro2 = useRef()
  const pro3 = useRef()
  const pros = [pro0, pro1, pro2, pro3]
  const count = props.count
  useEffect(() => {
    if (count === 0) {
      pros.forEach((pro) => {
        pro.current.style.background = 'none'
        pro.current.style.color = 'hsl(231, 100%, 99%)'
      })
      pro0.current.style.background = 'hsl(228, 100%, 84%)'
      pro0.current.style.color = 'hsl(213, 96%, 18%)'
    } else if (count === 1) {
      pros.forEach((pro) => {
        pro.current.style.background = 'none'
        pro.current.style.color = 'hsl(231, 100%, 99%)'
      })
      pro1.current.style.background = 'hsl(228, 100%, 84%)'
      pro1.current.style.color = 'hsl(213, 96%, 18%)'
    } else if (count === 2) {
      pros.forEach((pro) => {
        pro.current.style.background = 'none'
        pro.current.style.color = 'hsl(231, 100%, 99%)'
      })
      pro2.current.style.background = 'hsl(228, 100%, 84%)'
      pro2.current.style.color = 'hsl(213, 96%, 18%)'
    } else {
      pros.forEach((pro) => {
        pro.current.style.background = 'none'
        pro.current.style.color = 'hsl(231, 100%, 99%)'
      })
      pro3.current.style.background = 'hsl(228, 100%, 84%)'
      pro3.current.style.color = 'hsl(213, 96%, 18%)'
    }
  })
  return (
    <section className="side-bar">
      <Progress pro={pro0} number='1' detail='YOUR INFO' />
      <Progress pro={pro1} number='2' detail='SELECT PLAN' />
      <Progress pro={pro2} number='3' detail='ADD-ONS' />
      <Progress pro={pro3} number='4' detail='SUMMARY' />
    </section>
  )
}


// ================ Input Component =================

function Input(props) {
  return (
    <div className="input-section">
      <label htmlFor={props.id}>{props.label}<span>{props.error}</span></label>
      <input
        style={props.style}
        onChange={props.onChange}
        name={props.name}
        type="text"
        placeholder={props.placeholder}
        id={props.id}
        value={props.value} />
    </div>
  )
}



function Checked(props) {
  return (
    <div className="input-container">
      <input
        checked={props.checked}
        onChange={props.onChange}
        value={props.value}
        type="radio"
        name={props.name}
        id={props.id} />
      <div className="radio-tile">
        <div className="radio-icon">
          <img src={props.src} alt="Arcade-Icon" />
        </div>
        <div className="label-bar">
          <label htmlFor={props.id}>{props.text}</label>
          <p className='price'>{props.price}</p>
          <p className='free'>{props.free}</p>
        </div>

        {/* <div className="free-section"> */}
        {/* <p>{props.free}</p> */}
        {/* </div> */}
      </div>
    </div>
  )
}

function Toggle(props) {
  const yearly = props.yearly
  const month = useRef()
  const year = useRef()
  useEffect(() => {
    if (yearly) {
      month.current.style.fontWeight = '400'
      year.current.style.fontWeight = '700'
    } else {
      month.current.style.fontWeight = '700'
      year.current.style.fontWeight = '400'
    }
  })
  return (
    <div className="toggle-switch">
      <p ref={month} className="month">Monthly</p>
      <div className="toggle">
        <input
          onChange={props.onChange}
          type="checkbox"
          name="yearly" id="toggle"
          checked={props.checked} />
        <label className="slider" htmlFor='toggle'></label>
      </div>
      <p ref={year} className="year">Yearly</p>
    </div>
  )
}
// ============= StepTwo Components ============

function CheckBox(props) {
  return (
    <div className="check-box">
      <div className="check-item">
        <input
          checked={props.checked}
          onChange={props.onChange}
          type="checkbox"
          name={props.name}
          id={props.id}
          value={props.value} />
        <label htmlFor={props.id}></label>
      </div>
      <div className="details">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
      </div>
      <div className="amount">
        <h3>{props.charges}</h3>
      </div>
    </div>
  )
}


// ================ StepOne Component =================

function StepOne(props) {
  return (
    <div className="step-1">
      <Head
        heading='Personal Info'
        subHeading='Please Provide your name, email address, and phone number' />
        
      <Input
        style={props.nameStyle}
        error={props.nameError}
        name='user'
        placeholder='e.g. Stephen King'
        id='name'
        onChange={props.onChange}
        value={props.name}
        label='Name' />
      <Input
        style={props.emailStyle}
        error={props.emailError}
        name='email'
        onChange={props.onChange}
        placeholder='e.g. stephenking@lorem.com'
        id='mail'
        value={props.email}
        label='Email Address' />
      <Input
        style={props.phoneStyle}
        error={props.phoneError}
        name='phone'
        onChange={props.onChange}
        placeholder='e.g. +1 234 567 890'
        id='phone'
        value={props.phone}
        label='Phone Number' />
    </div>
  )
}

// ========= StepTwo ==============

function StepTwo(props) {
  const yearly = props.yearly
  let arcade
  let advanced
  let pro
  let freeMonth
  if (yearly) {
    arcade = '$90/yr'
    advanced = '$120/yr'
    pro = '$150/yr'
    freeMonth = '2 Months free'
  } else {
    arcade = '$9/mo'
    advanced = '$12/mo'
    pro = '$15/mo'
    freeMonth = ''
  }
  const plan = props.plan
  return (
    <div className="step-2">
      <Head
        heading='Select your plan'
        subHeading='You have the option of monthly or yearly billing' />
      <div className="plan-selecting">
        <Checked
          name='plan'
          free={freeMonth}
          checked={plan === 'arcade'}
          onChange={props.onChange}
          value='arcade'
          id='arcade'
          price={arcade}
          src={iconArcade}
          text='Arcade' />
        <Checked
          name='plan'
          free={freeMonth}
          price={advanced}
          checked={plan === 'advanced'}
          onChange={props.onChange}
          value='advanced'
          id='advanced'
          src={iconAdvanced}
          text='Advanced' />
        <Checked
          name='plan'
          free={freeMonth}
          price={pro}
          checked={plan === 'pro'}
          onChange={props.onChange}
          value='pro'
          id='pro'
          src={iconPro}
          text='Pro' />
      </div>
      <div className="plan-range">
        <Toggle yearly={yearly} onChange={props.onChange} checked={props.yearly} />
      </div>
    </div>
  )
}

// ================ StepThree Component =================

function StepThree(props) {
  const addsOn = props.data
  const yearly = props.yearly
  let onlinePrice
  let storagePrice
  let customPrice
  if (yearly) {
    onlinePrice = '+$10/yr'
    storagePrice = '+$20/yr'
    customPrice = '+$20/yr'
  } else {
    onlinePrice = '+$1/mo'
    storagePrice = '+$2/mo'
    customPrice = '+$2/mo'
  }
  return (
    <div className="step-3">
      <Head
        heading='Pick add-ons'
        subHeading='Add-ons help enhance your gaming experience' />
      <div className="add-ons-section">
        <CheckBox
          checked={addsOn.onlineService}
          id='online-service'
          onChange={props.onChange}
          name='onlineService'
          value='online-service'
          title='Online Service'
          detail='Access to multiple games'
          charges={onlinePrice} />

        <CheckBox
          checked={addsOn.largeStorage}
          id='large-storage'
          onChange={props.onChange}
          name='largeStorage'
          value='large-storage'
          title='Large Storage'
          detail='Extra 1 TB of cloud save'
          charges={storagePrice} />

        <CheckBox
          checked={addsOn.custom}
          id='custom'
          onChange={props.onChange}
          name='custom'
          value='custom'
          title='Customizable Profile'
          detail='Custom theme on your profile'
          charges={customPrice} />

      </div>
    </div>
  )
}


// ================ StepFour Component =================

function StepFour(props) {
  let sum = 0
  const {
    plan,
    yearly,
    addsOn
  } = props.data
  let planPrice
  let priceTemp
  if(yearly) {
    if(plan === 'arcade') {
    planPrice = 90
    sum += 90
    priceTemp = `$${planPrice}/yr`
  } else if(plan === 'advanced') {
    planPrice = 120
    sum += 120
    priceTemp = `$${planPrice}/yr`
  } else if(plan === 'pro') {
    planPrice = 150
    sum +=  150
    priceTemp = `$${planPrice}/yr`
  } else {
    priceTemp = '-----'
}
  } else if(plan === 'arcade') {
    sum += 9
    planPrice = 9
    priceTemp = `$${planPrice}/mo`
  } else if(plan === 'advanced') {
    sum += 12
    planPrice = 12
    priceTemp = `$${planPrice}/mo`
  } else if(plan === 'pro') {
    sum += 15
    planPrice = 15
    priceTemp = `$${planPrice}/mo`
  } else {
    priceTemp = '-----'
}
const Purchase = (props) => {
  return (
      <div className="purchase-section">
          <div className="title-part">
              <h3>{props.name}</h3>
            </div>
            <div className="price-part">
              <p>${props.price}/{props.duration}</p>
            </div>
          </div>
  )
}
let custom
let largeStorage
let onlineService
if (yearly) {
  if(addsOn.custom) {
    sum += 20
  custom = <Purchase name='Custom' price='20' duration='yr' />
}
if(addsOn.largeStorage) {
  sum += 20
  largeStorage = <Purchase name='Large Storage' price='20' duration='yr' />
}
if(addsOn.onlineService) {
  sum += 10
  onlineService = <Purchase name='Online Service' price='10' duration='yr' />
}
} else {
  if(addsOn.custom) {
    sum += 2
  custom = <Purchase name='Custom' price='2' duration='mo' />
}
if(addsOn.largeStorage) {
  sum +=2
  largeStorage = <Purchase name='Large Storage' price='2' duration='mo' />
}
if(addsOn.onlineService) {
  sum += 1
  onlineService = <Purchase name='Online Service' price='1' duration='mo' />
}
}
let monthYear 
if (yearly) {
  monthYear = 'yr'
} else {
  monthYear = 'mo'
}

const setCount =  props.set
  return (
    <div className="step-4">
      <Head
        heading='Finishing up'
        subHeading='Double-check everything looks OK before confirming' />
      <div className="finishing-container">
        <div className="sub-section">
          <div className="finishing-head">
            <div className="title-part">
              <h3>{plan}</h3>
              <button onClick={setCount}>Change</button>
            </div>
            <div className="price-part">
              <p>{priceTemp}</p>
            </div>
          </div>
          {onlineService}
          {largeStorage}
          {custom}
        </div>
          <div className="total">
            <div className="title-part">
              <h3>Total (per Month)</h3>
            </div>
            <div className="price-part">
              <p>+${sum}/{monthYear}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

// ================ StepFour Component =================

function StepFive() {
  return (
    <div className="step-5">
      <div className="container">
        <div className="thanks-logo">
          <img src={thanksLogo} alt="Thank You Logo" />
        </div>
        <div className="thank-you-text">
          <h1>Thank You</h1>
        </div>
        <div className="thanks-para">
          <p>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
      </div>
    </div>
  )
}



// ================ App Component =================

function App() {


  
  // --------------- Data ----------
  const initialState = {
    user: '',
    email: '',
    phone: '',
    plan: '',
    yearly: false,
    addsOn: {
      onlineService: false,
      largeStorage: false,
      custom: false
    }
  }
  const [formData, setFromData] = useState(initialState)
  const {
    user,
    email,
    phone,
    plan,
    yearly,
    addsOn
  } = formData
  // ============ Multi Components Start ========


  const [nameStyle,setNameStyle] = useState({})
  const [emailStyle,setEmailStyle] = useState({})
  const [phoneStyle,setPhoneStyle] = useState({})
  const [nameError, setNameError] = useState('')
  const [PhoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [count, setCount] = useState(0)
  let buttonBoxStyle
  let goBackButton
  let nextButtonStyle
  // const [confirmStyle,setConfirmStyle] = useState({display:'none'})
  let confirmStyle = {display:'none'}
  if (count === 0) {
    buttonBoxStyle = {
      display: 'block'
    }
    goBackButton = {
      display: 'none'
    }
  } else {
    buttonBoxStyle = {
      display: 'flex'
    }
    goBackButton = {
      display: 'block'
    }
  }
  if(count === 3) {
    confirmStyle = {
      display:'block'
    }
    nextButtonStyle = {
      display:'none'
    }
  }
  if(count === 4) {
    buttonBoxStyle = {display:'none'}
  }
  // ============ Multi Components End ========

  // ================ OnChange Handler ========

  function changeHandler(e) {
    
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFromData({
        ...formData,
        addsOn: { ...formData.addsOn, [name]: checked },
        [name]: checked
      })
    } else { 
      setFromData({
        ...formData,
        [name]: value
      })
    }
    if(user != '') {
      setNameStyle({})
      setNameError('')
    } 
    if(email != '') {
      setEmailStyle({})
      setEmailError('')
    } 
    if(phone != '') {
      setPhoneStyle({})
      setPhoneError('')
    }
  }


  // const [data,setData] = useState
  // ------------- Submit Handler Function ----------
  const submitHandler = (e) => {
    e.preventDefault()
    
    setCount(count + 1)
    console.log(formData)
  }
  
  const setOne = () => setCount(count - 2)
  const addOne = () => {
    if(user === '' || email === '' || phone === '') {
      if(user === '') {
        setNameError('This Field is required')
        setNameStyle({borderColor:'red'})
      } 
      if(email === '') {
        setEmailError('This Field is required')
        setEmailStyle({borderColor:'red'})
      } 
      if(phone === '') {
        setPhoneError('This Field is required')
        setPhoneStyle({borderColor:'red'})
      }
    } else {
      console.log(count)
      setCount(count + 1)
    }
  }
  const minOne = () => setCount(count - 1)

  const stepOne = <StepOne 
                    nameStyle={nameStyle}  
                    emailStyle={emailStyle}
                    phoneStyle={phoneStyle}
                    nameError={nameError}
                    emailError={emailError}
                    phoneError={PhoneError}
                    onChange={changeHandler} 
                    name={user} 
                    email={email} 
                    phone={phone} />
  const stepTwo = <StepTwo plan={plan} onChange={changeHandler} yearly={yearly} />
  const stepThree = <StepThree yearly={yearly} data={addsOn} onChange={changeHandler} />
  const stepFour = <StepFour set={setOne} data={formData} />
  const stepFive = <StepFive />
  const displaySection = [stepOne, stepTwo, stepThree, stepFour, stepFive]

  
  return (
    <div className="app">
      <div className="container">
        <div className="inner-container">
          <SideBar count={count} />
          <form className='form-section' onSubmit={submitHandler}>
            <div className="display-section">
              {displaySection[count]}
              <div className="button-box" style={buttonBoxStyle}>
                <Button
                  style={goBackButton}
                  className='go-back'
                  onClick={minOne}
                  text='Go Back' />
                <Button
                  style={nextButtonStyle}
                  className='next-button'
                  onClick={addOne}
                  text='Next Step' />
                  <input className='confirm-button' style={confirmStyle} type="submit" value="Confirm" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
