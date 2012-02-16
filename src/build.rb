#!/usr/bin/env ruby

# login
File.open("../index.html", "w")  do |output|
  tpls = ["header_login.html", "login.html", "footer_base.html"]
  tpls.each do |tpl|
    File.open(tpl) do |f|
      f.each { |f_str| output.puts(f_str) }
    end
  end
end

# sections
files = ["dashboard.html", "form.html", "help.html", "list.html"]

files.each do |section|
  File.open("../#{section}", "w")  do |output|
    tpls = ["header.html", section, "footer.html", "footer_base.html"]
    tpls.each do |tpl|
      File.open(tpl) do |f|
        f.each do |f_str| 
          if tpl == "header.html"
            if section == "dashboard.html"
              f_str.gsub!('{active_dashboard}', ' class="active"')
              f_str.gsub!('{active_users}', '')
              f_str.gsub!('{active_help}', '')
            elsif section == "help.html"
              f_str.gsub!('{active_dashboard}', '')
              f_str.gsub!('{active_users}', '')
              f_str.gsub!('{active_help}', 'class="active"')            
            else
              f_str.gsub!('{active_dashboard}', '')
              f_str.gsub!('{active_users}', ' class="active"')
              f_str.gsub!('{active_help}', '')            
            end
          end
          output.puts(f_str)
        end
      end
    end
  end
end