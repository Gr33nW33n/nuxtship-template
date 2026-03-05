<script setup>
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Sending...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<template>
  <!-- To make this contact form work, create your free access key from https://web3forms.com/
     Then you will get all form submissions in your email inbox. -->
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="needs-validation"
    novalidate
  >
    <input type="hidden" name="access_key" value="5cc5526b-2028-4b51-a1ae-d73981cbc869" />
    <!-- Create your free access key from https://web3forms.com/ -->
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />
    <div class="mb-5">
      <input
        type="text"
        placeholder="Nombre"
        required
        class=" text-black w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-lg outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 border-gray-300 transition-colors duration-300"
        name="name"
      />
      <div class="empty-feedback invalid-feedback text-red-500 text-sm mt-1">
        Please provide your full name.
      </div>
    </div>
    <div class="mb-5">
      <label for="email_address" class="sr-only">Correo electrónico</label
      ><input
        id="email_address"
        type="email"
        placeholder="tu@correo.com"
        name="email"
        required
        class=" text-black w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-lg outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 border-gray-300 transition-colors duration-300"
      />
      <div class="empty-feedback text-red-500 text-sm mt-1">
         Proporcione informacion valida porfavor .
      </div>
      <div class="invalid-feedback text-red-500 text-sm mt-1">
        Proporcione informacion valida porfavor .
      </div>
    </div>
    <div class="mb-3">
      <textarea
        name="message"
        required
        placeholder="Tu mensaje"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-lg outline-none h-36 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 border-gray-300 transition-colors duration-300 text-black"
      ></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Porfavor ingresa tu mensaje .
      </div>
    </div>
    <LandingButton type="submit" size="lg" block>Enviar Mensaje</LandingButton>
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
