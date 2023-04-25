<script>
    import '../global.css'
  </script>
  


<header>
  <h1 id="logo-h">
    <a href="/">
      Logo
    </a>
  </h1>
</header>

<slot />





<style>

  #logo-h{
    padding-top: var(--double-unit) ;
    padding-left: var(--quad-unit) ;
  }

  @media only screen and (max-width: 600px) {
    #logo-h{
    padding-top: var(--unit) ;
    padding-left: var(--double-unit) ;
  }
  }

</style>