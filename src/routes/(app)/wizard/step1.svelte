<script>
  export let formData;
  export let onNext;

  const updateFormData = (key, value) => {
    formData.update(data => ({ ...data, [key]: value }));
  };
</script>

<h2>Step 1: Basic Information</h2>
<form on:submit|preventDefault={onNext}>
  <label>
    Name:
    <input type="text" on:input={(e) => updateFormData('name', e.target.value)} />
  </label>
  <label>
    Email:
    <input type="email" on:input={(e) => updateFormData('email', e.target.value)} />
  </label>
  <button type="submit">Next</button>
</form>
