<template>
  <div class="enrollment-form">
    <section class="contact-section">
      <div class="info-content-overlay">
        <div class="info-container">
          <div class="info-text">
            <h3>报名条件：</h3>
            <ul>
              <li>青岛市范围内新初二、新初三学生；海尔学校在校高一、高二学生以及部分优秀学生。</li>
              <li>品学兼优，具备优秀数学学科素养、一定的计算机编程基础和良好的英语听说能力。</li>
            </ul>
            <h3>报名方式：</h3>
            <ul>
              <li>学校推荐：符合上述报名条件的学生可由所在学校进行推荐。</li>
              <li>个人自荐：未获得学校推荐，但符合上述报名条件的学生，可通过个人提交简历的方式进行报名。</li>
              <li>简历提交：学校推荐或个人自荐的学生均需要通过线上方式（扫描右侧二维码）提交学生简历，简历提交截止于2024年7月3日12:00。（说明：海尔学校在校学生将单独组织报名。）</li>
            </ul>
          </div>
          <div class="qr-code-image">
            <img src="/images/qr_code.jpg" alt="二维码">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.enrollment-form {
  /* 移除 max-width 和 margin，让内容铺满 */
  width: 100%;
  height: 100vh;
  overflow: visible; 
  position: relative; /* 修改为 relative */
  top: 0;
  left: 0;
  padding: 0;  /* 移除内边距 */
  text-align: center;
}

.contact-section {
  background-image: url('/images/computer.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;  
  width: 100%;  /* 确保宽度 100% */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-content-overlay {
  width: 100%;
  height: 100%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0 auto;  /* 内容区域居中 */
}

/* 其他样式保持不变 */
.info-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}


.info-text {
  flex: 0 0 45%;
  position: relative;
  background-color: rgba(107, 52, 147, 0.5);
  border-radius: 0 0 100px 0;
  color: white;
  padding-right: 50px;
  padding-left: 5%;
  text-align: left;
  vertical-align: middle;
}

.qr-code-image img {
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translateY(-50%);
  width: 25%;
  height: auto;
  max-width: 100%;
}

.info-text h3 {
  margin-bottom: 15px;
  font-size: 1.5em;
  color: #fff;
}

.info-text ul {
  margin-bottom: 20px;
  list-style-type: none;
  padding-left: 0;
}

.info-text li {
  margin-bottom: 10px;
  line-height: 1.6;
}
</style>