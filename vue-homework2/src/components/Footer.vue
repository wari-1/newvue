<template>
  <div class="footer">
    <div class="inner">
      <nav>
        <ul>
          <li>
            <a href>HOME</a>
          </li>
          <li>
            <a href>SELLING</a>
          </li>
          <li>
            <a href>BUYING</a>
          </li>
          <li>
            <a href>RENTING</a>
          </li>
          <li>
            <a href>MOVING</a>
          </li>
          <li>
            <a href>FINANCE</a>
          </li>
          <li>
            <a href>CONTACTS</a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        <p>
          REAL ESTATE @ 2010
          <a href>Privacy Policy</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot"
};
</script>

<style>
.footer {
  background-color: #1d1d1d;
  border-top: 1px solid #292929;
  padding: 43px 0 62px 0;
}
.footer ul {
  display: flex;
  margin-bottom: 14px;
}

.footer li > a {
  font-size: 7px;
  line-height: 13px;
  color: #777777;
  margin: 0 13px 0 13px;
}
.footer li:first-child a {
  margin-left: 0;
}
.footer li + li {
  border-left: 1px solid #777777;
}
.footer p {
  font-size: 7px;
  color: #fff;
  display: flex;
}
.footer p > a {
  color: #777777;
  text-decoration: underline;
  margin-left: 5px;
}
</style>
