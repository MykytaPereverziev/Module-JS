import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
 
return (
  <PhoneInput
    placeholder="Enter phone number"
    value={ this.state.value }
    onChange={ value => this.setState({ value }) } />
)