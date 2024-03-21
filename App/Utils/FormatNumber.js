const FormatNumber = (number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

export default FormatNumber;
