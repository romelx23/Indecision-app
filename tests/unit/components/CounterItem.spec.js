import { shallowMount } from '@vue/test-utils'
import CounterItem from '@/components/CounterItem.vue'
describe('Counter Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(CounterItem)
  })
  //   test('debe de hacer match con el snapshop', () => {
  //     const wrapper = shallowMount(CounterItem)
  //     expect(wrapper.html()).toMatchSnapshot()
  //   })
  test('h2 debe tener el valor por defecto Counter', () => {
    // const wrapper = shallowMount(CounterItem)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.find('h2').text()).toBe('Counter')
  })
  test('el valor por defecto debe de ser 100 en el p', async () => {
    // const wrapper = shallowMount(CounterItem)
    const value = wrapper.find('[data-testid="counter"]').text()
    expect(value).toBe('10')
    // const [increaseBtn] = wrapper.findAll('button')
    // await increaseBtn.trigger('click')
  })
  test('debe de incrmeentear el valor del contador en 1', async () => {
    // const wrapper = shallowMount(CounterItem)
    // const increaseBtn = wrapper.find('[data-btn="increase"]')
    const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')

    // TODO revisar el valor del p

    // const decreaseBtn = wrapper.find('[data-btn="decrease"]')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    const value = wrapper.find('[data-testid="counter"]').text()
    expect(value).toBe('11')
  })
  test('debe de establecer el valor por defecto', () => {
    const { start } = wrapper.props()
    const value = wrapper.find('[data-testid="counter"]').text()
    expect(value).toBe(start.toString())
    // console.log(typeof start)
  })
  test('debe de mostrar la prop title', () => {
    const title = 'Hola Mundo desde una prueba'
    const wrapper = shallowMount(CounterItem, {
      props: {
        title,
        start: 10
      }
    })
    // console.log(wrapper.html())
    expect(wrapper.find('h2').text()).toBe(title)
  })
})
