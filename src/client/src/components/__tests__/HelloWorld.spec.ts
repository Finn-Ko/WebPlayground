import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).toContain('This is a test')
  })
})
