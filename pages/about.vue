<template>
  <div class="flex relative z-20 items-center">
    <div
      class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4"
    >
      <div class="bg-lightblue py-20 px-4">
        <div class="text-left mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2
            class="mr-8 w-full md:w-1/3 text-3xl font-extrabold font-mono leading-9"
          >
            {{ $t('WhoIam') }}
          </h2>
          <dl class="w-full font-mono md:w-2/3">
            <dd class="mb-16">
              <p>
                {{ $t('parrafo1SobreMi')
                }}<img
                  style="display: inline"
                  src="~/assets/logotecno.png"
                  width="100px"
                  height="50px"
                />{{ $t('parrafo2SobreMi') }}
                <br />
                {{ $t('parrafo3SobreMi') }}
              </p>
            </dd>
            <dd class="mb-16">
              <p>
                {{ $t('parrafo4SobreMi') }}
              </p>
            </dd>
            <dd class="mb-16">
              <p>
                {{ $t('parrafo5SobreMi') }}
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
