// import { expect } from 'chai' //jest中的断言库
// // import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
    
//   })
// })

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/src/App.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})

