import { shallowMount } from '@vue/test-utils'
import IndecisionPage from '@/components/IndecisionPage.vue'
// En esta sección vimos los Spy, Mocks y Wrapper de Vue Test Utils
// Spy: Es una función que se mantiene pendiente de una función que se ejecuta en el código.
// Mock :Es como va lucir mi data
// vm : es la intancia de vue donde se ecuentran las propiedad y metodos de mi componente
// wrapper : es una instancia de vue que se encarga de renderizar el componente
// En este caso vamos a crear un wrapper de IndecisionPage y vamos a verificar que el componente se renderice correctamente
describe('Indecision Component', () => {
  let wrapper
  let clgSpy
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      answer: 'yes',
      forced: false,
      image: 'https://yesno.wtf/assets/yes/2.gif'
    })
  }))
  beforeEach(() => {
    wrapper = shallowMount(IndecisionPage)

    clgSpy = jest.spyOn(console, 'log')
    jest.clearAllMocks()
  })
  test('debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('Escribir en el input no debe de dispara nada console.log()', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    const input = wrapper.find('input')
    await input.setValue('hola')
    expect(clgSpy).toHaveBeenCalledTimes(1)
    expect(getAnswerSpy).toHaveBeenCalledTimes(0)
  })
  test('Escribir el simbolo de interrogacion debe lanzar el fetch ', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    const input = wrapper.find('input')
    await input.setValue('hola?')
    // expect(clgSpy).toHaveBeenCalledTimes(1)
    expect(getAnswerSpy).toHaveBeenCalled()
  })
  test('Pruebas en getAnswer()', async () => {
    await wrapper.vm.getAnswer()
    const img = wrapper.find('img')
    expect(img.exists()).toBeTruthy()
    expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/2.gif')
    expect(wrapper.vm.answer).toBe('yes')

    // console.log(wrapper.vm.image)
    // console.log(wrapper.vm.answer)
  })
  test('Pruebas en getAnswer-Fallo en el API', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Error')))
    await wrapper.vm.getAnswer()
    // TODO fallo en la API
    const img = wrapper.find('img')
    expect(img.exists()).toBeFalsy()
    expect(wrapper.vm.answer).toBe('No se pudo cargar del API')
  })
})
