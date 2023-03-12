---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
url: "/{{ replace .Name "-" " " | lower }}/"
---

{{ "{{" }} partial "head/meta.html" . {{ "}}" }}

{{ "{{" }} partial "my-partial.html" (dict "skildring" "[MI SKILDRING]") {{ "}}" }}
