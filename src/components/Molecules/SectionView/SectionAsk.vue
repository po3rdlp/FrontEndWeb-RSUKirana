<template>
  <section class="bg-gray-200">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="w-fit mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-none xl:text-5xl text-pink-400"
        >
          PUNYA PERTANYAAN ATAU SARAN ? HUBUNGI KAMI
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          Pertanyaan yang anda kirim akan kami terima melalui Google Form
        </p>
      </div>
      <div
        class="min-w-0 md:min-w-full lg:min-w-full flex-shrink-0 rounded-lg lg:mt-0 lg:col-span-5 lg:flex"
      >
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold">Nama</span>
            </label>
            <input type="text" placeholder="Nama" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold">Email</span>
            </label>
            <input type="text" placeholder="Email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold">Pesan</span>
            </label>
            <textarea
              placeholder="Pesan"
              class="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">KIRIM</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
