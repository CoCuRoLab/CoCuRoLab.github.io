---
title: Members
nav:
  order: 3
  tooltip: About our team
---


## {% include icon.html icon="fa-solid fa-users" %} Director
{% include list.html data="members" component="portrait" filters="role: pi" %}

## {% include icon.html icon="fa-solid fa-users" %} PhD Students 

{% include list.html data="members" component="portrait" filters="role: phd" %}

<!-- ## {% include icon.html icon="fa-solid fa-users" %} Undergraduate Students -->
<!-- {% include list.html data="members" component="portrait" filters="role: undergrad" %} -->


## {% include icon.html icon="fa-solid fa-users" %} Alum

{% include list.html data="members" component="portrait" filters="role: alum" %}

<!-- Simple text-only list of alumni pulled from the _members collection -->
<!-- <div class="alum-names">
<ul style="gap: 0.5rem;">
{% for person in site.members %}
  {% if person.role == "alum" %}
    <li>
      <a href="{{ person.url | relative_url }}">{{ person.name }}</a>
      &nbsp;&mdash;&nbsp;
      <span class="role">{% if person.previousrole %}{{ person.previousrole }} → {% endif %}{% if person.newrole %}{{ person.newrole }}{% else %}{{ person.role }}{% endif %}</span>
    </li>
  {% endif %}
{% endfor %}
</ul> 
</div> -->


<!-- {% include list.html data="members" component="portrait" filters="role: ^(?!pi$)" %}

<!-- {% include section.html background="images/background.jpg" dark=true %} 

<!-- {% include section.html %}  


{% capture content %} 

{% endcapture %} 

{% include grid.html style="square" content=content %}
