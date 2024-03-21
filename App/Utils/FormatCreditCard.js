const FormatCreditCardNumber = (number) => {
  // Convert number to string
  const numberString = number.toString();

  // Extract last four digits
  const lastFourDigits = numberString.substr(-4);

  // Mask the rest of the digits
  const maskedDigits = "**** **** **** ";

  // Concatenate masked digits with the last four digits
  const formattedNumber = maskedDigits + lastFourDigits;

  return formattedNumber;
};

export default FormatCreditCardNumber;
