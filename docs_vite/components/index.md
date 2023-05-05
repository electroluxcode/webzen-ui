<script setup>
import { onMounted } from 'vue'
  import './index.css'
  onMounted(() => {
    import('../../test/commonHtml/example.js')
    
  })
</script>

# 组件


 <my-div option="测试" >
<div slot="container" id="test" >
    hello
</div>

<div slot="container" id="test" class="active">
    tab1
</div>

<div slot="container" id="test" class="active">
    tab2
</div>
<div slot="container" id="test" class="active">
    tab3
</div>

</my-div>