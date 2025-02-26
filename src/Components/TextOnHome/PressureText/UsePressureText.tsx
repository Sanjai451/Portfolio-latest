import TextPressure from "./TextPressure"


const UsePressureText = () => {
  return (
    <div className="pressure_Text" >
    
    <TextPressure
        text="Hello world"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#fff"
        strokeColor="#fff"
        minFontSize={36}
    />
    </div>
  )
}

export default UsePressureText
