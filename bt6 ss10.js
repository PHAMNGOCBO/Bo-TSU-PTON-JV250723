function calculateAverage() {
  let mathScore = Number(document.getElementById("marth").value);
  let physisScore = Number(document.getElementById("physis").value);
  let chemistryScore = Number(document.getElementById("chemistry").value);

  let average = (mathScore + physisScore + chemistryScore) / 3;
  document.getElementById("result").innerText = `Điểm trung bình: ${average.toFixed(2)}`;
}