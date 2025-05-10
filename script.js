// فۆرمی ڕیپۆرت
document.getElementById("reportForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const videoLink = document.getElementById("videoLink").value;
    const reportType = document.getElementById("reportType").value;

    // ناردنی ڕیپۆرت (نمونەیی)
    alert(`✅ ڕیپۆرت نێردرا!\n\n@${username}\nلینک: ${videoLink}\نوع: ${reportType}`);
    
    // پاککردنەوەی فۆرم
    this.reset();
});
